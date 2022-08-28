import React from "react";
import { IRepo } from "../models/models";

export function RepoCard({ repo }: { repo: IRepo }) {
    return (
        <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <h2 className="text-lg font-bold">{repo.full_name}</h2>
            <p className="text-sm">
                Size: <span className="font-bold mr-2">{repo.size}</span>
                Updated: <span className="font-bold">{repo.updated_at.toString()}</span>
            </p>
            <p className="text-sm font-thin">{repo?.description}</p>
        </div>
    )
}