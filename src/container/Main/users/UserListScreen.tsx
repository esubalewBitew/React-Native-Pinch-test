import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StatusBar, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
//@ts-ignore
import { RootState } from '@/interface/types';
//@ts-ignore
import { fetchUsersRequest } from '@/Store/actions';

import styles from './style';
//@ts-ignore
import UserRenderComponent from '@/components/users';
//@ts-ignore
import GoBack from '@/components/GoBack';

interface IUserProps {
    createdAt: string;
    name: string;
    avatar: string;
    id: number;
}

const UsersScreen: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users);
    const error = useSelector((state: RootState) => state.error);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsersData = async () => {
            // Start loading
            setLoading(true);

            try {
                await dispatch(fetchUsersRequest());
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        };

        // Call the asynchronous function
        fetchUsersData();
    }, [dispatch]);

    useEffect(() => {
        console.log('User Data ', users);
    }, [users]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} />
            <GoBack />

            {loading ? (
                // Display ActivityIndicator while loading
                <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
            ) : (
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {error ? (
                        <Text>Error: {error}</Text>
                    ) : (
                        <View>
                            {users
                                ? users?.map((user: IUserProps, index: number) => (
                                    <UserRenderComponent key={index} item={user} />
                                ))
                                : null}
                        </View>
                    )}
                </ScrollView>
            )}
        </View>
    );
};

export default UsersScreen;
