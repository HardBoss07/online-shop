"use client";

import Link from 'next/link';
import { Component } from 'react';

class NavBar extends Component<{ activeIcon: number }> {
    render() {
        const { activeIcon } = this.props;

        const getIconColor = (index: number) => {
            return activeIcon === index ? 'icon-active' : 'icon-inactive';
        };

        return (
            <nav className="nav-bar flex space-x-4">
                {/* Logo */}
                <Link href="/" className="nav-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="89.47 36.48 383 74.78" className={`w-40 h-8`}>
                        <path
                            d="M101.74 89.52V50.83l-2.39-.7c-.8-.3-1.4-1.1-1.4-1.89V38.37c0-.7.7-1.89 1.5-1.89h20.74c.7 0 1.2.8 1.4 1.3l5.88 14.26 6.38-4.79v1.2l-5.88 4.49c.1.5.2.9.4 1.2l5.58-4.09c.1.3.1.7.3 1l-5.48 4.09.5 1.2 5.98-4.49s.7.2 1.2.3l-6.78 5.09 1.4 3.29 6.88-5.09v1.2l-6.38 4.79c0 .3.3 1 .4 1.2l5.98-4.39v1.1l-5.58 4.19v.1l.5 1.2 5.18-3.89v1.2l-4.79 3.59c0 .2.3.9.6 1.1l4.19-3.19c0 .2 0 1 .1 1.2l-4.09 2.99.5 1.2h.1l3.49-2.59v1.1l-3.09 2.29c0 .4.3 1.1.5 1.3l2.59-1.99v1.2l-2.19 1.7c0 .2.2.9.4 1.2l1.89-1.3v1.1l-1.5 1.1c.1.3.4 1 .5 1.2l1-.7c.1.3.1.5.1.8 0 .1 0 .3-.1.4 0 0-.5.4-.6.5l.5 1.2.2-.2v.9l1.7 4.09-.6-31.21q0-.2-.1-.2c-1.7-.5-3.79-.6-3.79-2.79V38.56c0-.8.7-1.99 1.6-1.99h18.15c.8 0 1.5 1.1 1.5 1.79v9.97c0 .9-.6 1.6-1.4 1.89l-2.49.7v51.15c0 .9-.7 1.99-1.6 1.99H134.67c-.7 0-1.3-.8-1.6-1.4L114.72 58.19c0 1.1.1 5.28.3 6.28.1.2.3.7.3.7v.1c-.1 0-.3.2-.4.5v1.4l.9-.7c.1.3.4.9.4.9l-1.3 1v1.5h.1c.2-.2 1.3-1 1.7-1.2.1.2.3.6.3.9l-1.99 1.5v1.6l2.59-1.89c0 .2.2.7.3.9l-2.89 2.19v.3c0 .5 0 .8.1 1.2l3.29-2.49c.1.2.4.8.4 1l-3.69 2.69v1.6l4.09-3.09c.2.1.4.7.4.9l-4.49 3.39v.5s0 .7.1 1l4.99-3.69c.1.2.3.7.3.9l-5.28 3.99v1.6l5.88-4.39.3.8c0 .1-.1.1-.1.2l-5.98 4.49q-.1 0-.1.1c0 .3 0 1.3.1 1.5l6.58-4.99c.1.1.3.7.3 1l-6.88 5.18v2.09l1.99.7 6.28-4.69c.2.3.5.9.5.9l-5.68 4.19c.3.3.5.6.7 1l5.38-3.89c.2.2.4.8.4.8l-5.58 4.29v1.5l5.98-4.49c.2.1.4.6.5.8l-6.48 4.99v6.38c0 .9-.8 1.99-1.7 1.99H99.58c-.9 0-1.6-1.1-1.6-1.89V92.16c-.6.2-1.2.6-1.5 1.2l-3.09 2.39v-1.3l6.78-5.09v.9l1.6-.6Zm-9.77-45.77-2.49 1.89c.1-.8.7-1.89 1.6-1.89h.9Zm-2.5 3.49 4.59-3.49h1.7l-6.28 4.69v-1.2Zm39.59-3.49-1.89 1.4c0-.7 1.1-1.4 1.89-1.4Zm-2 4.29v-1.2l4.09-3.09h1.6l-5.68 4.29Zm0 1.59 6.78-5.18v1.2l-6.78 5.18v-1.2Zm-37.59 1.6v-1.2l6.78-5.18v1.3l-6.78 5.09Zm0 1.6 6.78-5.18v1.3l-6.78 5.09v-1.2Zm0 2.69 6.88-5.09c.1 0 .5.8.5.9l-7.08 5.18c-.1.1-.3-.8-.3-.9v-.1Zm2.4 2.19-1.1-.3 7.18-5.38c.6 0 1.2.2 1.2.2l.1.1-7.18 5.28c-.1.1-.2.1-.2.1Zm38.78.3 7.18-5.38v1.2l-6.78 5.18-.1-.2v-.7s-.2 0-.3-.1Zm-37.29.2 6.78-5.09v1.2L93.36 59.5V58.2Zm0 4.09V61l6.78-5.09v1.2l-6.78 5.18Zm0 2.79v-1.3l6.78-5.09v1.2l-6.78 5.18Zm0 1.5 6.78-5.09v1.1l-6.78 5.09v-1.1Zm0 2.69 6.78-5.09v1.2l-6.78 5.09v-1.2Zm0 3.99v-1.2l6.78-5.09v1.2l-6.78 5.09Zm0 1.59 6.78-5.09v1.2l-6.78 5.09v-1.2Zm0 2.79 6.78-5.09v1.2l-6.78 5.09v-1.2Zm0 3.99v-1.2l6.78-5.18v1.3l-6.78 5.09Zm0 2.79v-1.2l6.78-5.18v1.3l-6.78 5.09Zm0 1.6 6.78-5.18v1.3l-6.78 5.09v-1.2Zm22.44 2.59 6.98-5.28c.1.1.3.7.4 1l-6.98 5.18c-.2-.3-.4-.9-.4-.9Zm-22.44 1.4v-1.2l6.78-5.18v1.2l-6.78 5.18Zm0 2.79v-1.3l6.78-5.09v1.2L93.36 92.8Zm25.93 4.29 6.98-5.18s.3.5.4.9L119.79 98c-.2-.3-.5-.9-.5-.9Zm1.29 3.09-.4-1 6.98-5.18c.2.4.4.9.4.9l-6.98 5.28Zm-31.11-.2 6.78-5.09v1.2l-6.78 5.09v-1.2Zm31.91 2.29-.3-.9 6.98-5.28c.1.4.4.9.4.9l-7.08 5.28Zm-31.91 1.7v-1.2l6.68-4.99.1-.1v1.1l-6.78 5.18Zm32.51-.5 6.88-5.18c.2.3.4.9.4.9l-6.98 5.18c0-.1-.3-.7-.3-.9Zm.9 2.09 6.98-5.18s.2.6.2 1l-6.88 5.18c-.1-.2-.3-.8-.3-1Zm-33.41-.1 6.78-5.09v1.2l-6.78 5.18v-1.3Zm34.3 2.2 6.88-5.09c.2.3.4.9.4.9l-6.98 5.18c-.1-.2-.3-.8-.3-1Zm-34.3 1.79v-1.2l6.68-4.99c.2.3.3.7.3 1-.1 0-.1.1-.1.1l-6.78 5.09h-.1Zm35.1.4 6.88-5.18h.1l.6.6-7.08 5.28c-.2-.1-.5-.4-.5-.7Zm-34.5.8 6.98-5.28c.2 0 .4.2.5.2.3.1.5.1.8.1l-7.38 5.48c-.4 0-.7-.2-.9-.5Zm4.59.59h-1.7l7.48-5.58h1.6l-7.38 5.58Zm2.09 0 7.38-5.58h1.6l-7.38 5.58h-1.6Zm3.69 0 7.38-5.58h1.6l-7.38 5.58h-1.6Zm25.83 0 7.48-5.58h1.6l-7.38 5.58h-1.7Zm3.78 0 7.38-5.58h1.6l-7.38 5.58h-1.6Zm3.69 0 7.38-5.58h1.7l-7.48 5.58h-1.6Zm5.39 0h-1.7l6.88-5.18h.1v1.2l-5.28 3.99Zm-35 0 6.58-4.99v1.2l-4.99 3.79h-1.6Zm38.69 0h-1.6l3.19-2.39c0 .4 0 1.1-.3 1.4l-1.3 1Zm-33.61 0h-1.4l2.89-2.19c0 1-.6 2.19-1.5 2.19Zm67.96-15.42V88.39l1.4-.93V57.68l-1.4-.93V49.31h10.3l9.7 24.86V57.68l-1.4-.93V49.31h11.17v7.44l-1.4.93V95.84h-8.91l-9.7-24.86V87.47l1.4.93v7.44H177.16Zm46.68 0-6.18-6.18V55.48l6.18-6.18h15.09l6.18 6.18V89.65l-6.18 6.18H223.85Zm3.45-8.37h8.18l1.26-1.26V58.95l-1.26-1.26H227.3l-1.26 1.26V86.2l1.26 1.26Zm36.31 8.37-7.71-38.16-1.4-.93V49.3h8.24l6.65 32.84 6.65-32.84h8.24v7.44l-1.4.93-7.71 38.16H263.6Zm28.72 0V88.39l1.4-.93 6.05-29.78-1.4-.93V49.31h17.68v7.44l-1.4.93 6.05 29.78 1.4.93v7.44h-8.24l-2.06-10.24h-9.17l-2.06 10.24h-8.24Zm12.03-18.61h5.72l-2.86-14.23-2.86 14.23Zm35.51 18.61V88.39l1.4-.93V57.68h-1.4l-.93 1.4H331.5V49.31h27.92v9.77h-7.44l-.93-1.4h-1.4V87.46l1.4.93v7.44H339.88Zm30.26 0V88.39l1.4-.93V57.68l-1.4-.93V49.31h24.2v9.77h-7.44l-.93-1.4h-6.05v10.7h10.7v8.38h-10.7v10.7h6.05l.93-1.4h7.44v9.77h-24.2Zm41.09 0-6.18-6.18V55.48l6.18-6.18h14.62l6.18 6.18v8.71h-8.38V58.94l-1.26-1.26h-7.71l-1.26 1.26V86.19l1.26 1.26h7.71l1.26-1.26V80.94h8.38v8.71l-6.18 6.18H411.22Zm31.51 0V88.39l1.4-.93V57.68l-1.4-.93V49.31H453.9v7.44l-1.4.93v10.7h10.24V57.68l-1.4-.93V49.31h11.17v7.44l-1.4.93V87.46l1.4.93v7.44H461.34V88.39l1.4-.93V76.76H452.5v10.7l1.4.93v7.44H442.73Z"
                            fill="#134663"/>
                    </svg>
                </Link>

                {/* Products */}
                <Link href="/products" className="nav-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={`w-6 h-6 ${getIconColor(2)}`}
                    >
                        <path
                            d="M403.29 32H280.36a14.46 14.46 0 00-10.2 4.2L24.4 281.9a28.85 28.85 0 000 40.7l117 117a28.86 28.86 0 0040.71 0L427.8 194a14.46 14.46 0 004.2-10.2v-123A28.66 28.66 0 00403.29 32z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                        <path
                            d="M352 144a32 32 0 1132-32 32 32 0 01-32 32z"
                            fill="currentColor"
                        />
                        <path
                            d="M230 480l262-262a13.81 13.81 0 004-10V80"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                    </svg>
                </Link>

                {/* Search Bar */}
                <div className="flex-grow">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="search-input"
                    />
                </div>

                {/* Search Icon */}
                <Link href="/search" className="nav-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={`w-6 h-6 ${getIconColor(3)}`}
                    >
                        <path
                            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                            d="M338.29 338.29L448 448"
                        />
                    </svg>
                </Link>

                {/* Cart */}
                <Link href="/cart" className="nav-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={`w-6 h-6 ${getIconColor(4)}`}
                    >
                        <circle
                            cx="176"
                            cy="416"
                            r="16"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                        <circle
                            cx="400"
                            cy="416"
                            r="16"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                            d="M48 80h64l48 272h256"
                        />
                        <path
                            d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                    </svg>
                </Link>

                {/* Account */}
                <Link href="/account" className="nav-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className={`w-6 h-6 ${getIconColor(5)}`}
                    >
                        <path
                            d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                        />
                        <path
                            d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                            fill="none"
                            stroke="currentColor"
                            strokeMiterlimit="10"
                            strokeWidth="32"
                        />
                    </svg>
                </Link>
            </nav>
        );
    }
}

export default NavBar;
