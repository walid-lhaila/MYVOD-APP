import React from 'react';
import {Image, Pressable, ScrollView, Text, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import ghosted from '../../assets/images/ghosted.png';
import movie2 from '../../assets/images/guardiansOfTheGalaxy.png';
import movie3 from '../../assets/images/bookClub.png';
import movie1 from '../../assets/images/from.png';
import SearchCardResult from "@/app/components/SearchCardResult";

function SearchComponents({close}) {
    return (
      <View>
          <View style={{backgroundColor: 'black', height: '100%', width: '100%'}}>
              <View style={{paddingVertical: 23}}>
                  <Pressable onPress={close} style={{ paddingHorizontal: 10, marginTop: 10}}>
                      <Ionicons name={'arrow-back'} color="white" size={28} />
                  </Pressable>
              </View>
              <View style={{backgroundColor: '#3A3B3C', width: '100%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5}}>
                <Ionicons name={"search-sharp"} color={'#888B90'} size={32} />
                  <TextInput style={{width: '76%', fontSize: 17, fontFamily: 'mono'}} keyboardType="default" placeholder="Search games, shows, movie..."  placeholderTextColor="#888B90"  />
                  <Ionicons name={'mic-sharp'} color={'#888B90'} size={32} />
              </View>
              <ScrollView>
                <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'white', paddingVertical: 15}}>Recommended TV Shows & Movies</Text>
                  <SearchCardResult title={"Ghosted"} picture={ghosted} />
                  <SearchCardResult title={"guardians Of ..."} picture={movie2} />
                  <SearchCardResult title={"Book Club"} picture={movie3} />
                  <SearchCardResult title={"From"} picture={movie1} />
              </ScrollView>
          </View>
      </View>
    );
}

export default SearchComponents;