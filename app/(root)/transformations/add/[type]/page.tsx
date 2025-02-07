import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({ params, searchParams }: PageProps) => {
  const resolvedParams = params ? await params : undefined;           // Await params
  const resolvedSearchParams = searchParams ? await searchParams : {}; // Await searchParams

  const { type } = resolvedParams || {};
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");
  if (!type || !transformationTypes[type]) {
    redirect("/404");
    return null;
  }

  const transformation = transformationTypes[type];
  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationTypePage;
