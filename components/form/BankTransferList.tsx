export default function BankTransferList({ content, onChange }:any) {
  return (
    <tr className="border-b hover:text-red-500">
      <td className="flex items-center my-1">
        <input
          type="radio"
          name="bankTransfer"
          onChange={onChange}
          className="mr-2"
          value={content.vboutListCode}
          required
        />
        <div className="flex items-center">
          <img
            src={content.flag}
            alt={content.country}
            height="30px"
            width="30px"
            className="mx-3 hidden md:flex"
          />
          <div className="currency flex flex-col">
            <h6 className="text-sm md:text-md font-bold">
              {content.currencyCode}
            </h6>
            <p className="text-sm">{content.currency}</p>
          </div>
        </div>
      </td>
      <td className="mr-1">
        <p className="mb-0 text-sm">
          {content.country}
        </p>
      </td>
    </tr>
  );
}
