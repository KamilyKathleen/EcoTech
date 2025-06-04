'use client';

import Breadcrumb from "@/app/components/breadcrumb";
import Banner from '@/app/img/banner.jpg';
import CollectionForm from "@/app/components/collectionForm";
import MaterialsForm from "@/app/components/materialsForm";

export default function Admin() {
    return (
        <>
            <Breadcrumb
                image={Banner}
                title="Administração"
                page="Admin"
            />
            <div className="space-y-10 my-8">
                <MaterialsForm />
                <CollectionForm />
            </div>
        </>
    );
}
