import { NextResponse } from "next/server";
import connectToDatabase from "@/app/database";
import CollectionPoints from "@/app/database/schemas/collectionPoints";

export async function POST(request) {
    try {
        await connectToDatabase();
        const data = await request.json();

        const newPoint = await CollectionPoints.create({
            ...data,
            discardedMaterials: data.discardedMaterials || [],
        });

        return NextResponse.json(
            { message: "Ponto cadastrado com sucesso!", point: newPoint },
            { status: 201 }
        );
    } catch (error) {
        console.error("Erro ao cadastrar ponto:", error);
        return NextResponse.json(
            { message: "Erro ao cadastrar ponto." },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const points = await CollectionPoints.find();
        return NextResponse.json(points, { status: 200 });
    } catch (error) {
        console.error("Erro ao buscar pontos:", error);
        return NextResponse.json(
            { message: "Erro ao buscar pontos de coleta." },
            { status: 500 }
        );
    }
}
