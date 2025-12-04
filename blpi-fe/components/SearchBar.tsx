"use client";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!query.trim()) return;
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <InputGroup className="lg:flex max-w-sm rounded-none">
      <InputGroupInput
        placeholder="বাংলায় খুঁজুন..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="font-sans"
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
}
