import React, {useState, useEffect} from 'react';
import {Pressable, ScrollView, Text, TextInput, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import SearchCardResult from "@/app/components/SearchCardResult";


function SearchComponents({close, allMovies}) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const fetchSearchResults = (searchQuery) => {
        if(!searchQuery) {
            setResults([]);
            return;
        }
        const filtredResults = allMovies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
        setResults(filtredResults);
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchSearchResults(query);
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [query]);


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
                  <TextInput style={{width: '76%', fontSize: 17, fontFamily: 'mono', color: 'white'}} keyboardType="default" placeholder="Search games, shows, movie..."  placeholderTextColor="#888B90" value={query} onChangeText={setQuery}  />
                  <Ionicons name={'mic-sharp'} color={'#888B90'} size={32} />
              </View>
              <ScrollView contentContainerStyle={{ padding: 10 }}>
                  <Text style={{ fontSize: 21, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
                      Search Results
                  </Text>
                  {results.length > 0 ? (
                      results.map((movie) => (
                          <SearchCardResult
                              key={movie._id}
                              title={movie.title}
                              picture={movie.picture}
                          />
                      ))
                  ) : (
                      <Text style={{ color: '#888B90', fontSize: 16, textAlign: 'center' }}>
                          No results found.
                      </Text>
                  )}
              </ScrollView>
          </View>
      </View>
    );
}

export default SearchComponents;