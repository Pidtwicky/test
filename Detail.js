

import React from 'react';
import { View, Button, Text } from 'react-native';



export default class Detail  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        dataSource: [],
        
    
        };
    }

    render(){

        console.log("Affichage : " + JSON.stringify(this.props) );

        return(
            <View>
            <Text>Coucou</Text>
            <Text>Coucou</Text>
            <Text>Coucou</Text>
            <Text>Coucou</Text>
            <Text>Coucou</Text>
            <Button
                title="Go to Main"
                onPress={() => this.props.navigation.navigate('Main',{list:this.state.dataSource}) }
            />
      </View>
        );
    }
}


