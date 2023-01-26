import { api } from "../api";
import { getAPIClient } from "../axios";

export const createUser = async ({
  context,
  data,
}: {
  data: any;
  context?: any;
}) => {
  const Api = context ? getAPIClient({ context }) : api;
  // const searchFilter = search ? `&search=${search}` : '';
  return await Api.get(`/user`, data);
};
