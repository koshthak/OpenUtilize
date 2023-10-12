"use client";

import { ChangeEvent } from "react";
// import { edenTreaty, edenFetch } from "@open-utilize/eden";

export function Upload() {
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      let file = files.item(i);
      if (!file) {
        return;
      }
      formData.append("files", file);
    }
    const data = await fetch("http://localhost:5000/pdf", {
      method: "POST",
      body: formData,
    });
    console.log(data);
    // !filename missing bug PR (eden): https://github.com/elysiajs/eden/pull/26
    // const { data, error } = await edenTreaty.pdf.post({ files });
  };

  return (
    <label
      htmlFor="dropzone-file"
      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        className="hidden"
        onChange={handleFileChange}
        multiple
      />
    </label>
  );
}