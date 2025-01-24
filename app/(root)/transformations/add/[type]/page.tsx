import Header from "@/components/shared/Header"
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants"
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ( { params: { type } }:
SearchParamProps) => {
  const { userId } = await auth();
  console.log(userId);
  const transformation = transformationTypes[type];

  if (!userId) redirect('/sign-in')

  const user = await getUserById(userId);
  // user_2rznEvjjPNsdG2tq90vl9WWV9Fv
  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
      <TransformationForm 
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  )
}

export default AddTransformationTypePage