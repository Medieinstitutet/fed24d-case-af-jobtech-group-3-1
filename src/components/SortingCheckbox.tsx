import { FormCheckboxVariation } from "@digi/arbetsformedlingen";
import { DigiFormCheckbox } from "@digi/arbetsformedlingen-react";
import { useState, useCallback } from "react";

type HandleSortingProps = {
    onCheck: (queryParams: string) => void;
};
  
export const SortingCheckbox = ({ onCheck }: HandleSortingProps) => {
  const workExp = String(import.meta.env.VITE_SORT_WORKEXP ?? "");
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback((e: any) => {
    const next =
      typeof e?.detail?.checked === "boolean"
        ? e.detail.checked
        : typeof e?.target?.checked === "boolean"
          ? e.target.checked
          : !checked;

    setChecked(next);
    onCheck(next && workExp ? workExp : "");
  }, [checked, onCheck, workExp]);

  return (
    <DigiFormCheckbox
      afLabel="Kryssruta"
      afVariation={FormCheckboxVariation.PRIMARY}
      afChecked={checked}
      onAfOnChange={handleChange}
    />
  )
}