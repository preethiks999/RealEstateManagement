const Inventory = ({ inventory }) => {
  console.log(inventory);
  return (
    <div className="flex justify-between flex-wrap border m-2 border-b-2 shadow-lg p-4 ">
      <div className="text-left">
        <p className="font-bold">{inventory.inventoryName}</p>
        <p>Saleable Area : {inventory.saleableArea}</p>
        <p>Carpet Area : {inventory.carpetArea}</p>
        <p className="font-bold">₹ {inventory.price / 100000} L</p>
      </div>
      <div>
        <img
          src="https://c.housingcdn.com/demand/s/client/common/assets/secondBannerImage.ed93b152.png"
          className="w-[150px] h-[150px] items-center"
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default Inventory;
