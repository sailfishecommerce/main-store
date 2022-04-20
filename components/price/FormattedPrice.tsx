import { memo } from "react";

import { useCurrencies } from "@/hooks/useCurrency";
import { LineLoader } from "@/components/loader/ProductsLoader";
import { useAppSelector } from "@/hooks/useRedux";
import FormatCurrency from "@/components/price/FormatCurrency";

interface formattedPriceProps {
  price: string | number;
  isProduct?: boolean;
  className?: string;
}

function FormattedPriceComponent({
  price,
  isProduct,
  className,
}: formattedPriceProps): JSX.Element {
  const { currencyList } = useCurrencies();
  const { currency } = useAppSelector((state) => state.currencyLanguage);
  const priceValue = price ? price : 0;
  return (
    <>
      {currencyList === undefined ? (
        "unable to fetch price"
      ) : currencyList === null ? (
        <LineLoader />
      ) : (
        currencyList.length > 1 && (
          <FormatCurrency
            price={priceValue}
            isProduct={isProduct}
            currencies={currencyList}
            currency={currency}
            className={className}
          />
        )
      )}
    </>
  );
}

const FormattedPrice = memo(FormattedPriceComponent);

export default FormattedPrice;
