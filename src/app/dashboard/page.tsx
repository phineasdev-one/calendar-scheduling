import { requireUser } from "@/hooks/requireUser.hook";
import React from "react";

const DashboardPage = async () => {
  await requireUser();

  return (
    <div>
      DashbosardPage
    </div>
  );
};

export default DashboardPage;
