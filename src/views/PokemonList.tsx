import { useMemo, useState } from 'react';
import MaterialReactTable, {
    type MRT_ColumnDef,
    type MRT_ColumnFiltersState,
    type MRT_PaginationState,
    type MRT_SortingState,
} from 'material-react-table';
import { Button, Chip, IconButton, Tooltip } from '@mui/material';
import { Refresh, ArrowForward } from '@mui/icons-material';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';
import { PokemonList, PokemonListState } from '../models/Pokemon'

const Example = () => {
    const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
        [],
    );
    const [globalFilter, setGlobalFilter] = useState('');
    const [sorting, setSorting] = useState<MRT_SortingState>([]);
    const [pagination, setPagination] = useState<MRT_PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });

    const { data, isError, isFetching, isLoading, refetch } =
        useQuery<PokemonListState>({
            queryKey: [
                'table-data',
                pagination.pageIndex, //refetch when pagination.pageIndex changes
                pagination.pageSize, //refetch when pagination.pageSize changes
            ],
            queryFn: async () => {
                const fetchURL = new URL(
                    '/api/v2/pokemon/',
                    'https://pokeapi.co',
                );
                fetchURL.searchParams.set(
                    'offset',
                    `${pagination.pageIndex * pagination.pageSize}`,
                );
                fetchURL.searchParams.set('limit', `${pagination.pageSize}`);

                const response = await fetch(fetchURL.href);
                const json = (await response.json()) as PokemonListState;
                for (const pokemon of json.results) {
                    const pokemonURL = new URL(pokemon.url);
                    pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonURL.pathname.split('/')[4]}.png`;
                }
                return json;
            },
            keepPreviousData: true,
        });

    const columns = useMemo<MRT_ColumnDef<PokemonList>[]>(
        () => [
            {
                accessorKey: 'name',
                header: 'Name',
                // render the Cell as a Chip
                Cell: ({ cell }) => {
                    return <Chip color='primary' label={cell.getValue<string>().toLocaleUpperCase()} />;
                },
            },
            {
                accessorKey: 'image',
                header: 'Image',
                Cell: ({ cell }) => {
                    return <img alt="" src={cell.getValue<string>()} height={50} />;
                }
            },
            {
                accessorKey: 'url',
                header: 'URL',
                Cell: ({ cell }) => {
                    return <Button variant="contained" href={cell.getValue<string>()} endIcon={<ArrowForward />}>OPEN</Button>;
                },
            }
        ],
        [],
    );

    return (
        <MaterialReactTable
            columns={columns}
            data={data?.results ?? []} //data is undefined on first render
            initialState={{ showColumnFilters: true }}
            manualFiltering
            manualPagination
            manualSorting
            muiToolbarAlertBannerProps={
                isError
                    ? {
                        color: 'error',
                        children: 'Error loading data',
                    }
                    : undefined
            }
            onColumnFiltersChange={setColumnFilters}
            onGlobalFilterChange={setGlobalFilter}
            onPaginationChange={setPagination}
            onSortingChange={setSorting}
            renderTopToolbarCustomActions={() => (
                <Tooltip arrow title="Refresh Data">
                    <IconButton onClick={() => refetch()}>
                        <Refresh />
                    </IconButton>
                </Tooltip>
            )}
            rowCount={data?.count ?? 0}
            state={{
                columnFilters,
                globalFilter,
                isLoading,
                pagination,
                showAlertBanner: isError,
                showProgressBars: isFetching,
                sorting,
            }}
        />
    );
};

const queryClient = new QueryClient();

const PokemonListView = () => (
    <QueryClientProvider client={queryClient}>
        <Example />
    </QueryClientProvider>
);

export default PokemonListView;
