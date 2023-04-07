"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";
import { useCallback } from "react";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
  
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    //define empty object
    let currentQuery = {};

    //if params exist, parse them into an object
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    //update the query object with the new category
    const updatedQuery: any = { ...currentQuery, category: label };

    //if the category is already selected, remove it from the query
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    //stringify the query object and push it to the router
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);

  }, [label, params, router]);

  return (
    <div
    onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected ? "border-b-neutral-800" : "border-transparent"
      } ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
