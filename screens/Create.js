import {
  Button,
  View,
  Alert,
  AppState,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "../style/createStyle";
import { useState } from "react";
import DatePicker from "react-native-date-picker";
import moment from "moment";

function Create() {
  const [firstName, onChangeFirstName] = useState("First Name");
  const [lastName, onChangeLastName] = useState("Last Name");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [email, onChangeEmail] = useState("residentemail@teamsicstars.org");
  const [cycle, onChangeCycle] = useState("Cycle 13");

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  return (
    <View style={styles.createContainer}>
      <View style={styles.padding}>
        <Text style={styles.header}>Legal Name</Text>
        <TextInput
          style={styles.inputTop}
          onChangeText={onChangeFirstName}
          value={firstName}
        />
        <TextInput
          style={styles.inputBottom}
          onChangeText={onChangeLastName}
          value={lastName}
        />
        <Text style={styles.secondaryText}>
          Make sure this matches the name on your government ID & icstars*
          cycle.
        </Text>
      </View>
      <View style={styles.padding}>
        <Text style={styles.header}>Date of Birth</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            numberOfLines={1}
            editable={false}
            placeholder="📅 Birthday (mm/dd/yyyy)"
            value={birthDate ? moment(birthDate).format("DD MMMM, YYYY") : ""}
            style={styles.input}
          />
          <DatePicker
            modal
            open={isDatePickerVisible}
            date={birthDate ? new Date(birthDate) : new Date()}
            onConfirm={(date) => {
              setDatePickerVisibility(false);
              formik.setFieldValue(name, date);
              setBirthDate(date);
            }}
            onCancel={hideDatePicker}
            mode="date"
            maximumDate={new Date(moment().subtract(1, "days"))}
          />
        </TouchableOpacity>
        <Text style={styles.secondaryText}>
          To sign up, you need to be at least 18 & part of an icstars* cycle.
          Your birthday won't be shared with other people.
        </Text>
      </View>
      <View style={styles.padding}>
        <Text style={styles.header}>Email</Text>
        <TextInput
          style={styles.email}
          onChangeText={onChangeEmail}
          value={email}
        />
        <Text style={styles.secondaryText}>
          We'll email you confirmations and receipts.
        </Text>
      </View>
      <View style={styles.padding}>
        <Text style={styles.header}>i.c.Stars* Cycle</Text>
        <TextInput
          style={styles.email}
          onChangeText={onChangeCycle}
          value={cycle}
        />
        <Text style={styles.secondaryText}>
          We'll email your cycle with your email.
        </Text>
      </View>
      <View>
        <View style={styles.bar}></View>
        <Text style={styles.linkText}>
          By selecting Agree and continue, I agree to i.c.stars* Terms of
          Service, Payment Terms of Service and Nondiscrimination Policy, and
          acknowledge the Privacy Policy.
        </Text>
        <View style={styles.btn}>
          <Button color="#3a322d" title="Create Account" />
        </View>
      </View>
    </View>
  );
}

export default Create;
