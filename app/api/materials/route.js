import { NextResponse } from "next/server";
import connectToDatabase from "@/app/database";
import DiscardedMaterials from "@/app/database/schemas/discardedMaterials";

export async function POST(request) {
    try {
        await connectToDatabase();
        const data = await request.json();

        const newMaterial = await DiscardedMaterials.create(data);

        return NextResponse.json(
            { message: "Material cadastrado com sucesso!", material: newMaterial },
            { status: 201 }
        );
    } catch (error) {
        console.error("Erro ao cadastrar material:", error);
        return NextResponse.json(
            { message: "Erro ao cadastrar material." },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectToDatabase();

        const materials = await DiscardedMaterials.find();

        return NextResponse.json(materials, { status: 200 });
    } catch (error) {
        console.error("Erro ao buscar materiais:", error);
        return NextResponse.json(
            { message: "Erro ao buscar materiais." },
            { status: 500 }
        );
    }
}
