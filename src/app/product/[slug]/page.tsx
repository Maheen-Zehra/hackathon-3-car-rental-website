import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/cars";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

// The props type should expect params as a promise that resolves to { slug: string }
interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

// Fetch the product by slug
async function getProduct(slug: string): Promise<Product | null> {
    return client.fetch(
        groq`*[_type == "car" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        type,
        image,
        fuelCapacity,
        transmission,
        seatingCapacity,
        brand,
        pricePerDay
        }`, { slug }
    );
}

// Component rendering the product page
export default async function ProductPage({ params }: ProductPageProps) {
    // Await the resolved params object
    const { slug } = await params;

    // Fetch the product data by slug
    const product = await getProduct(slug);

    // Handle case when product is not found
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    {product.image && (
                        <Image
                            src={urlFor(product.image).url()}
                            alt={product.name}
                            width={800}
                            height={800}
                            className="rounded-lg shadow-md mt-14"
                        />
                    )}
                </div>
                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <p className="text-2xl font-sans">{product.pricePerDay}</p>
                    <p className="text-2xl font-sans">{product.brand}</p>
                    <p className="text-2xl font-sans">{product.fuelCapacity}</p>
                    <p className="text-2xl font-sans">{product.seatingCapacity}</p>
                    <p className="text-2xl font-sans">{product.transmission}</p>
                </div>
            </div>
        </div>
    );
}
