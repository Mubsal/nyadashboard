import BreadCrumb from "@/components/breadcrumb";
import { KanbanBoard } from "@/components/kanban/kanban-board";
import NewTaskDialog from "@/components/kanban/new-task-dialog";
import { Heading } from "@/components/ui/heading";

const breadcrumbItems = [{ title: "Journal", link: "/dashboard/kanban" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`Journal`} description="Din dagbok" />
          <NewTaskDialog />
        </div>
        <div className="flex justify-center items-center">
        <KanbanBoard />

        </div>
      </div>
    </>
  );
}
