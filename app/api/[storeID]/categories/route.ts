import { NextResponse } from "next/server";
import prismadb from "@/lib/db";
import { Category } from "@/components/stores/dashboard/categories/categories";

export async function POST(
  req: Request,
  { params }: { params: { storeID: string } }
) {
  try {
    const body = await req.json();
    body.storeId = params.storeID;
    const { title, storeId }: Category = body;
    const newCategory = await prismadb.category.create({
      data: {
        storeId,
        title,
      },
    });
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.log("api/categories/POST", error);
    return new NextResponse(
      "Something went wrong when trying to save your category",
      { status: 500 }
    );
  }
}

export async function GET(
  req: Request,
  { params }: { params: { storeID: string } }
) {
  try {
    const Categories = await prismadb.category.findMany({
      where: { storeId: params.storeID },
    });
    return NextResponse.json(Categories);
  } catch (error) {
    console.log("api/categories/GET", error);
    return new NextResponse(
      "Ooops, something went wrong when getting the categories",
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, title } = body;
    const updatedCategory = await prismadb.category.update({
      where: {
        id,
      },
      data: {
        title,
      },
    });
    return NextResponse.json(updatedCategory, { status: 201 });
  } catch (error) {
    console.log("api/categories/PATCH", error);
    return new NextResponse(
      "Ooops, something went wrong when updating the category",
      { status: 500 }
    );
  }
}