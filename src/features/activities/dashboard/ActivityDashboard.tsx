import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/loadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const {loadActivities, activitiesRegistery } = activityStore;
  useEffect(() => {
    if(activitiesRegistery.size === 0)
        loadActivities();
  }, [activityStore, activitiesRegistery.size]);

  if (activityStore.loadingInitial) return <LoadingComponent />;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
       <ActivityFilters/>
      </Grid.Column>
    </Grid>
  );
});
