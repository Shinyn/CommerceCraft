//Innehåller alla kolumner som ska visas i tabellen
//Componenten används i products page.tsx, tillsammans med products.tsx
//Denna componenten är en del av data-table.tsx(som dock går att återanvända)

import { Order } from "@/components/stores/dashboard/orders/order";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
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

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "order_status",
    header: "Order Status",
  },
  {
    accessorKey: "order_total",
    header: "Total Price",
  },
  {
    accessorKey: "order_date",
    header: "Order-date",
  },
  {
    accessorKey: "customerId",
    header: "customerId",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
    id: "title",
  },
  {
    accessorKey: "customerEmail",
    header: "Customer Email",
  },
  {
    accessorKey: "customerPhone",
    header: "Customer Phone",
  },
  {
    accessorKey: "customerstreet",
    header: "Customer Street",
  },
  {
    accessorKey: "customerCity",
    header: "Customer City",
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;

      return (
        <>
          <Sheet>
            <SheetContent>
              <SheetHeader>
                <SheetTitle> {"Edit Order"}?</SheetTitle>
                <SheetDescription>Edit the productinfo here</SheetDescription>
                {/*TODO- EDIT */}
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
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(order.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SheetTrigger>Edit</SheetTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem>{/*TODO- DELETE */}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Sheet>
        </>
      );
    },
  },
];