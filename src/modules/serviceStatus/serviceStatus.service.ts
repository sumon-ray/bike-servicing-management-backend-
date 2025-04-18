import prisma from "../../prisma";

export const getPendingOrOverdueServicesService = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const services = await prisma.serviceRecord.findMany({
    where: {
      status: {
        in: ["pending", "in_progress"],
      },
      serviceDate: {
        lt: sevenDaysAgo,
      },
    },
  });

  return services;
};
