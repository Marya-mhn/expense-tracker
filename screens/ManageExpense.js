import { useLayoutEffect } from "react";
import { View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {}

  return (
    <View>
      {isEditing && (
        <View>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpense;
