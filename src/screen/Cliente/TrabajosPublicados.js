import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    RefreshControl,
    ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonMd from "../../components/ButtonMd";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Trabajo from "../../components/Trabajo";
import { apiClient } from "../../api/ApiClient";
import { useAuth } from "../../security/AuthContext";

export default function TrabajosPublicados() {
    const authContext = useAuth();
    const navigation = useNavigation();

    const [jobs, setJobs] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchDataAndJobs = async () => {
        try {
            const response = await apiClient.get(
                `/api/v1/vacantes/user/${authContext.id}`
            );
            setJobs(response.data);
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setJobs([]); // Configurar la lista de trabajos como vacía
            } else {
                console.error("Error fetching data in Trabajos Publicados:", error);
            }
        }
    };
    

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchDataAndJobs();
        setRefreshing(false);
    }, []);

    const goToCrear = () => {
        navigation.navigate("CrearTrabajo");
    };
    const goToListaPostulantes = (vacanteId) => {
        navigation.navigate("ListaPostulantes", { vacanteId });
    };

    useEffect(() => {
        fetchDataAndJobs();
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchDataAndJobs();
        }, [])
    );

    const renderItem = ({ item }) => (
        <Trabajo
            banos={item.numBanios}
            habitaciones={item.numHabitaciones}
            extras={item.extras}
            descripcion={item.descripcion}
            total={item.total}
            action={() => goToListaPostulantes(item.id)}
        />
    );

    return (
        <SafeAreaView style={styles.mainContainer} edges={["right", "left", "top"]}>
            {jobs.length > 0 ? (
                <FlatList
                    style={styles.card}
                    data={jobs}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    showsHorizontalScrollIndicator={false}
                    directionalLockEnabled={true}
                />
            ) : (
                <ScrollView
                    contentContainerStyle={styles.noJobsContainer}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <View style={styles.centerContainer}>
                    <Text style={styles.noJobsText}>
                            No hay trabajos disponibles
                    </Text>
                    <ButtonMd
                    text="Nuevo trabajo"
                    action={goToCrear}
                    icon="plus-circle"
                    />
                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    card: {
        top: 1,
    },
    noJobsContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    centerContainer: {
        alignItems: "center",
    },
    noJobsImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    noJobsText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    icon: {
        marginHorizontal: 5,
    },
});
