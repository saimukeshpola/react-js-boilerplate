import { connect, ConnectedProps, useDispatch } from "react-redux";
import { GREETIN_ACTION, Splash } from "../components/Splash/Splash";
import {
  sayGoodAfterNoon,
  sayGoodMorning,
  sayGoodNight,
} from "../redux/actions";
import { DataStore } from "../redux/redux-store.types";

const mapStateToProps = (state: DataStore) => {
  const { greeting } = state;
  return { ...greeting };
};

const connector = connect(mapStateToProps);

interface HomePageProps extends ConnectedProps<typeof connector> {}

const HomePage = (props: HomePageProps) => {
  const { message } = props;
  const dispatch = useDispatch();
  return (
    <Splash
      message={message}
      onGreetingChange={(greetingAction) => {
        switch (greetingAction) {
          case GREETIN_ACTION.MORNING:
            dispatch(sayGoodMorning());
            break;
          case GREETIN_ACTION.AFTERNOON:
            dispatch(sayGoodAfterNoon());
            break;
          case GREETIN_ACTION.NIGHT:
            dispatch(sayGoodNight());
            break;
          default:
            break;
        }
      }}
    />
  );
};

export default connector(HomePage);
