import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DigiFormInputSearch, DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { SortingDropdown } from "./SortingDropdown";
import { SortingCheckbox } from "./SortingCheckbox";

type FilterProps = {
  query: string;
  setQuery: (q: string) => void;
};

export const FilterAndSearchJobs = ({ setQuery}: FilterProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  // URL q parameter
  const params = new URLSearchParams(location.search);
  const q = params.get("q") ?? "";

  // Input state localt
  const [term, setTerm] = useState(q);

  //URL state keep in sync with q
  useEffect(() => {
    setQuery(location.search || "");
    // sync input when URL change (back/forward)
    setTerm(q);
  }, [location.search, q, setQuery]);

  // Search submit -> navigate with q i URL
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = term.trim();
    if (!next) return;
    const usp = new URLSearchParams(location.search);
    usp.set("q", next);
    navigate(
      { pathname: "/search", search: `?${usp.toString()}` },
      { replace: true }
    );
      setQuery(next);
  };

  // Sorting change -> navigate with sort in URL
  const handleSorting = (sortQuery?: string) => {
    const usp = new URLSearchParams(location.search);

    if (sortQuery) {
      // Clean leading ? or & if any
      const cleaned = sortQuery.replace(/^\?&?/, "");
      // Extract value of sort param
      const value = new URLSearchParams(cleaned).get("sort");
      if (value) usp.set("sort", value);
    } else {
      usp.delete("sort");
    }

    navigate(`/search?${usp.toString()}`, { replace: true });
  };

  const handleChecking = (checkQuery?: string) => {
    const usp = new URLSearchParams(location.search);

    if (checkQuery) {
      // Clean leading ? or & if any
      const cleaned = checkQuery.replace(/^\?&?/, "");
      // Extract value of sort param
      const value = new URLSearchParams(cleaned).get("sort");
      if (value) usp.set("sort", value);
    } else {
      usp.delete("sort");
    }

    navigate(`/search?${usp.toString()}`, { replace: true });
  };

  return (
    <DigiLayoutContainer afNoGutter afMarginTop> 
      <form
        onSubmit={onSubmit}
        role="search"
        aria-label="Job search"
        style={{ marginBottom: 12 }}
      >
        <DigiFormInputSearch
          afLabel="Sök på ett eller flera ord"
          afButtonText="Sök"
          value={term}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) =>
            setTerm(e?.target?.value ?? e?.detail?.value ?? "")
          }
        />
      </form>

      <SortingDropdown onSort={handleSorting} />
      <SortingCheckbox onCheck={handleChecking} />
    </DigiLayoutContainer>
  );
}
