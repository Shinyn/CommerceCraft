// This type is used to define the shape of our data.
import { Color } from "./colors";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import EditColorForm from "./EditColorForm";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteColor } from "@/components/stores/dashboard/colors/DeleteColor";

//Columns for the table
export const columns: ColumnDef<Color>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Color
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const color = row.original;
      function copyPaymentId() {
        if (color.id === undefined) return "no id";
        else return color.id.toString();
      }

      return (
        <>
          {/* //Sheet to edit a color, pulls over from the right side */}
          <Sheet>
            <SheetContent>
              <SheetHeader>
                <SheetTitle> {color.title}?</SheetTitle>
                <SheetDescription>Edit the color name here</SheetDescription>
                {EditColorForm(color)}
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
                {copyPaymentId === null ? null : (
                  <DropdownMenuItem
                    onClick={() =>
                      navigator.clipboard.writeText(copyPaymentId())
                    }
                  >
                    Copy color ID
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <SheetTrigger>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                </SheetTrigger>
                <DropdownMenuItem>
                  <DeleteColor itemId={color.id || ""} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Sheet>
        </>
      );
    },
  },
];
