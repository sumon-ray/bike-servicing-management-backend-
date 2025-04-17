import prisma from "../prisma";
import ICustomer from "./customer.interface";
const createCustomerIntoDB = async (data: ICustomer) => {
  //   console.log(data);

  // create customer into db
  const result = await prisma.customer.create({
    data: data,
  });
  return result;
};

// get all customers from db
const getAllCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

export const customerService = {
  createCustomerIntoDB,
  getAllCustomersFromDB,
};
