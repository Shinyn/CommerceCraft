//Specifies the layout of data-table for billboards
import { EditForm } from '@/components/stores/dashboard/billboards/EditForm';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Billboard } from "@/components/stores/dashboard/billboards/billboards";
import { MyDelete } from "@/components/stores/dashboard/billboards/deleteBillboard";
export const columns: ColumnDef<Billboard>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'text',
    id: 'title',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Text
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'image',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Image url
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'active',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Activated?
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <>
          {/* //Sheet to cover background avd display EditForm*/}
          <Sheet>
            <SheetContent>
              <SheetHeader>
                <SheetTitle> {'Edit Billboard'}?</SheetTitle>
                <SheetDescription>Edit the category name here</SheetDescription>
                {EditForm(row.original)}
              </SheetHeader>
            </SheetContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <SheetTrigger className="w-full">
                  <DropdownMenuItem className="hover:cursor-pointer">Edit</DropdownMenuItem>
                </SheetTrigger>
                <DropdownMenuItem className="hover:cursor-pointer">
                  <MyDelete itemId={row.original.id || ''} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Sheet>
        </>
      );
    },
  },
];
