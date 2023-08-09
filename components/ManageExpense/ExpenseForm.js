import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChengedHandler() {}
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChengedHandler,
        }}
      />
      <Input label="Date" />
      <Input label="Description" />
    </View>
  );
}

export default ExpenseForm;
