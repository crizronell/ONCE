"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

function PaginationControls({ hasNextPage, hasPrevPage }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "3";
  return (
    <div className="flex items-center justify-center gap-4  text-2xl ">
      <button
        className={!hasPrevPage ? "cursor-not-allowed" : "text-white"}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/video?page=${Number(page) - 1}&per_page=${per_page}`);
        }}>
        <span>&laquo;</span>
      </button>
      <h1>
        {page}/{Math.ceil(19 / Number(per_page))}
      </h1>
      <button
        className={!hasNextPage ? "cursor-not-allowed" : "text-white"}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/video?page=${Number(page) + 1}&per_page=${per_page}`);
        }}>
        <span>&raquo;</span>
      </button>
    </div>
  );
}

export default PaginationControls;
