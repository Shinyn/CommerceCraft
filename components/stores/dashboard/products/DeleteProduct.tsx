import { useParams } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
  useProductStore
} from './zustand/zustandstate';
const DeleteProduct = (params: { itemId: string }) => {
  const { storeID } = useParams();
  const reFetchProducts = useProductStore((state) => state.reFetchProducts);

  return (
    <>
      <div
        className="hover:cursor-pointer w-full"
        onClick={async (e) => {
          axios
            .delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${storeID}/products/${params.itemId}`)
            .then((res) => {
              toast.success('Product deleted');
              reFetchProducts(Array.isArray(storeID) ? storeID.toString() : storeID)
              return res.data;
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Delete
      </div>
    </>
  );
};

export default DeleteProduct;
