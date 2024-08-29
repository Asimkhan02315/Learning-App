import React from "react";
import { Text, View, TextInput, Button, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    employeeId: yup.string().required("Employee ID is required"),
    department: yup.string().required("Department is required"),
    fullName: yup.string().required("Full Name is required"),
    contactNumber: yup.string().required("Contact Number is required"),
    projectName: yup.string().required("Project Name is required"),
    projectManagerName: yup.string().required("Project Manager Name is required"),
    emailId: yup.string().email().required("Email ID is required"),
    deliveryAccountManager: yup.string().required("Delivery Account Manager is required"),
    emaiId: yup.string().email().required("Email ID is required"),
});

const EditProfileScreen = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);

    return (
        <ScrollView>
            <View style={{ marginHorizontal: 25, marginVertical: 25, gap: 10 }}>
                <Text style={{ color: "#0062AF", fontSize: 15, fontWeight: "500" }}>Personal Information</Text>
                <View>
                    <Text style={{ marginVertical: 10, color: "#748087", color: "#000" }}>Employee ID</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{ padding: 2, backgroundColor: "#fff", borderWidth: 0.5, borderRadius: 5 }}
                                placeholder="Emp1205"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="employeeId"
                    />
                    {errors.employeeId && <Text style={{ marginVertical: 6, color: "red" }}>This is required.</Text>}
                </View>
                <View>
                    <Text style={{ marginVertical: 10, color: "#000" }}>Department</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{ padding: 2, backgroundColor: "#fff", borderWidth: 0.5, borderRadius: 5 }}
                                placeholder="Technology"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="department"
                    />
                    {errors.department && <Text style={{ marginVertical: 6, color: "red" }}>This is required.</Text>}
                </View>
                <View>
                    <Text style={{ marginVertical: 10, color: "#000" }}>Full Name</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{ padding: 2, backgroundColor: "#fff", borderWidth: 0.5, borderRadius: 5 }}
                                placeholder="Rasika"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="fullName"
                    />
                    {errors.fullName && <Text style={{ marginVertical: 6, color: "red" }}>This is required.</Text>}
                </View>
                <View>
                    <Text style={{ marginVertical: 10, color: "#000" }}>Contact Number</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{ padding: 2, backgroundColor: "#fff", borderWidth: 0.5, borderRadius: 5 }}
                                placeholder="0000000000"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="contactNumber"
                    />
                    {errors.contactNumber && <Text style={{ marginVertical: 6, color: "red" }}>This is required.</Text>}
                </View>
            </View>
            <View style={{ marginHorizontal: 25, marginVertical: 25, gap: 10 }}>
                <Text style={{ color: "#0062AF", fontSize: 15, fontWeight: "500" }}>Project Information</Text>
                <View>
                    <Text style={{ marginVertical: 10, color: "#000" }}>Project Name</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{ padding: 2, backgroundColor: "#fff", borderWidth: 0.5, borderRadius: 5 }}
                                placeholder="Dynamic Program Creative"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="projectName"
                    />
                    {errors.projectName && <Text style={{ marginVertical: 6, color: "red" }}>This is required.</Text>}
                </View>
                <View>
                    <Text style={{ marginVertical: 10, color: "#000" }}>Project Manager Name</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{ padding: 2, backgroundColor: "#fff", borderWidth: 0.5, borderRadius: 5 }}
                                placeholder="Stefen Johnson"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="projectManagerName"
                    />
                    {errors.projectManagerName && <Text style={{ marginVertical: 6, color: "red" }}>This is required.</Text>}
                </View>
                <View>
                    <Text style={{ marginVertical: 10, color: "#000" }}>E-mail ID</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{ padding: 2, backgroundColor: "#fff", borderWidth: 0.5, borderRadius: 5 }}
                                placeholder="stefen@55mail.com"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="emailId"
                    />
                    {errors.emailId && <Text style={{ marginVertical: 6, color: "red" }}>This is required.</Text>}
                </View>
            </View>
            <View style={{ marginHorizontal: 25, marginVertical: 25, gap: 10 }}>
                <Text style={{ color: "#0062AF", fontSize: 15, fontWeight: "500" }}>Delivery Information</Text>
                <View>
                    <Text style={{ marginVertical: 10, color: "#000" }}>Delivery Account Manager</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{ padding: 2, backgroundColor: "#fff", borderWidth: 0.5, borderRadius: 5 }}
                                placeholder="Stefen Johnson"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="deliveryAccountManager"
                    />
                    {errors.deliveryAccountManager && <Text style={{ marginVertical: 6, color: "red" }}>This is required.</Text>}
                </View>
                <View>
                    <Text style={{ marginVertical: 10, color: "#000" }}>E-mail ID</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={{ padding: 2, backgroundColor: "#fff", borderWidth: 0.5, borderRadius: 5 }}
                                placeholder="stefenj@gmail.com"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="emaiId"
                    />
                    {errors.emaiId && <Text style={{ marginVertical: 6, color: "red" }}>This is required.</Text>}
                </View>
                <Button title="Update Profile" onPress={handleSubmit(onSubmit)} />
                <Text style={{ color: "#000", alignItems: "center", justifyContent: "center", textAlign: "center" }}>Cancel</Text>
            </View>
        </ScrollView>
    )
}

export default EditProfileScreen