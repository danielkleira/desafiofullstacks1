import { AdmProvider } from "./Adms";
import { BodyProvider } from "./Body";
import { ContactProvider } from "./Contacts";
import { UsersProvider } from "./Users";

const Providers = ({ children }) => {
  return (
    <UsersProvider>
      <AdmProvider>
        <ContactProvider>
          <BodyProvider>{children}</BodyProvider>
        </ContactProvider>
      </AdmProvider>
    </UsersProvider>
  );
};

export default Providers;
