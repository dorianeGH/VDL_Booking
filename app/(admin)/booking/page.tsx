import { requiredCurrentUser } from "@/auth/current-user";
import { Layout, LayoutTitle } from "@/components/layout";
import { Card } from "@/components/ui/card";
//import { prisma } from "@/prisma";
import { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  const user = await requiredCurrentUser();
  /* const booking = await prisma.booking.findMany({
    where: {
      userId: user.id,
    },
  }); */
  return (
    <Layout>
      <Card className='p-4'>
        <LayoutTitle>Booking</LayoutTitle>
      </Card>
    </Layout>
  );
}
