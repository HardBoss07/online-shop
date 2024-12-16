"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/app/navbar";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
                setProducts(response.data);
                setError(null);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to fetch products");
            }
        };

        fetchProducts();
    }, []);

    const createProductCard = (product: any) => {
        // Use the first image from the image_url path (assuming it's the path without a specific number)
        const imageUrl = `${product.imageURL}1.avif`;

        return (
            <div key={product.id} className="product-card">
                <h2 className="product-title">{product.name}</h2>
                <div className="image-container">
                    {/* Display the first image for each product */}
                    <Image
                        src={imageUrl}
                        alt={`Image of ${product.name}`}
                        width={200}
                        height={200}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-category">Category: {product.category}</p>
                <p className="product-stock">Stock: {product.stock}</p>
            </div>
        );
    };

    return (
        <>
            <Head>
                <title>Online Shop | Products</title>
                <meta name="description" content="Explore our wide range of products!" />
            </Head>
            <main>
                <header>
                    <NavBar activeIcon={2} />
                </header>
                <h1 className="text-3xl font-bold mb-6">All our Products:</h1>
                <Link href="/products/categories">Shop by category</Link>
                {error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="product-list">
                        {products.map((product: any) => createProductCard(product))}
                    </div>
                )}
            </main>
        </>
    );
}
