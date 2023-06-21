import { useSelector } from "react-redux"
import { RootState } from "src/store"

interface Plan {
  id: number;
  name: string;
  description: string;
  priceIntervalType: string;
  priceIntervalNumber: number;
  isActive: boolean;
}

const usePlansRows = () => {

  const plansData = useSelector((state: RootState) => state.plans.data)

  const restructuredData: Plan[] = plansData?.map((plan: any) => ({
    id: plan.id,
    name: plan.name,
    description: plan.description,
    priceIntervalType: plan.priceIntervalType,
    priceIntervalNumber: plan.priceIntervalNumber,
    isActive: plan.isActive,
  }));

  return restructuredData;
}

export default usePlansRows