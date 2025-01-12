import { useContext } from "react";
import Layout from "../../Components/Layout";
import { UserContext } from "../../Context/UserContext";
const MyAccount = () => {
  const context = useContext(UserContext);
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-16">
        <h1 className="font-medium text-xl">Account</h1>
      </div>
      <div className="w-6/12">
        <dl className="-my-3 divide-y divide-gray-100 text-lg">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {context.firstname} {context.lastname}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Username</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {context.user?.username}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Email</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {context.user?.email}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Phone</dt>
            <dd className="text-gray-700 sm:col-span-2">
              {context.user?.phone}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">City</dt>
            <dd className="text-gray-700 sm:col-span-2">{context.city}</dd>
          </div>
        </dl>
      </div>
    </Layout>
  );
};

export default MyAccount;
