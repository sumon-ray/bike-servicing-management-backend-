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

// get a customer by id
const getCustomerById = async (id: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  return result;
};

// update customer info into db
const updateCustomerInfoIntoDB = async (data: ICustomer, id: string) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: data,
  });
  return result;
};

// delete custome from db
const deleteCustomerFromDB = async (id: string) => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result;
};

export const customerService = {
  createCustomerIntoDB,
  getAllCustomersFromDB,
  getCustomerById,
  updateCustomerInfoIntoDB,
  deleteCustomerFromDB,
};
