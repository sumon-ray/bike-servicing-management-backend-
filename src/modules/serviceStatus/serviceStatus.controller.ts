import { Request, Response } from "express";
import { getPendingOrOverdueServicesService } from "./serviceStatus.service";

export const getPendingOrOverdueServicesController = async (req: Request, res: Response) => {
  try {
    const result = await getPendingOrOverdueServicesService();
    res.status(200).json({
      success: true,
      message: "Pending or overdue services fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching services",
      error,
    });
  }
};
