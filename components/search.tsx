'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function Search({ disabled }: { disabled?: boolean }) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(term: string) {
    setSearchTerm(term);
  }

  function handleSubmit() {
    const params = new URLSearchParams(window.location.search);
    if (searchTerm) {
      params.set('q', searchTerm);
    } else {
      params.delete('q');
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="relative mt-5 max-w-md">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="flex items-center rounded-md shadow-sm">
  <div className="p-2" aria-hidden="true">
    <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
  </div>
  <input
    type="text"
    name="search"
    id="search"
    disabled={disabled}
    className="h-10 flex-grow rounded-md border border-gray-200 pl-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    placeholder="請輸入股票代號"
    spellCheck={false}
    onChange={(e) => handleSearch(e.target.value)}
  />
  <button
        type="button"
        className="flex-grow "
        onClick={handleSubmit}
        disabled={isPending}
      >
        Search
      </button> 
</div>

            
    </div>
  );
}