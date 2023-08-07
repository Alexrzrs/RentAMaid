import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    ScrollView,
} from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Trabajo from "../../components/Trabajo";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { fetchJobsCleanerView } from "../../api/ApiDataFetchers";
import NoJobsAvailable from "../../assets/NoJobsAvailable.png";

export default function TrabajosPublicados() {
    const navigation = useNavigation();
    const [jobs, setJobs] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const goToTrabajo = () => {
        navigation.navigate("Detalle");
    };

    const getJobs = async () => {
        try {
            const response = await fetchJobsCleanerView();
            setJobs(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getJobs();
        setRefreshing(false);
    }, []);

    // Load on initial render
    useEffect(() => {
        getJobs();
    }, []);

    // Refresh the jobs data whenever the screen comes into focus
    useFocusEffect(
        useCallback(() => {
            getJobs();
        }, [])
    );

    const renderItem = ({ item }) => (
        <Trabajo
            banos={item.numBanios}
            habitaciones={item.numHabitaciones}
            extras={item.extras}
            descripcion={item.descripcion}
            action={goToTrabajo}
        />
    );

    return (
        <SafeAreaView
            style={styles.mainContainer}
            edges={["right", "left", "top"]}
        >
            {jobs.length > 0 ? (
                <FlatList
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
                //Added scroll view to be able to refresh the screen when no job is found
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
                        <Image
                            source={NoJobsAvailable}
                            style={styles.noJobsImage}
                        />
                        <Text style={styles.noJobsText}>
                            No hay trabajos disponibles
                        </Text>
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
    contentContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
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
});
