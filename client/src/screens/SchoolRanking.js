import React from 'react';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from '@expo/vector-icons';
import { ThemeContext } from "styled-components/native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, Image, Input, ErrorMessage, Table } from "../components";

const Container = styled.View`
flex : 1;
background-color: ${({ theme }) => theme.background};
border-radius : 10px;
flex-direction: row;
`;
const NormalContainer = styled.View`
margin-top : 20px;
border-width : 1px;
justify-content : center;
border-color : ${({ theme }) => theme.text};
border-radius : 30px;
`

const ListContainer = styled.View`
margin-top : 20px;
margin-bottom: 20px;
width : 90%;
border-width : 1px;
border-color : ${({ theme }) => theme.text};
justify-content: space-between;
align-items: center;
`
const RealContainer = styled.View`
flex : 0.5;
background-color: ${({ theme }) => theme.background};
border-radius : 10px;
`;


const TextContainer = styled.View`
background-color: ${({ theme }) => theme.background};
align-items: center;
border-radius : 10px;
`;

const StyledText = styled.Text`
font-size : 30px;
font-weight: bold;
margin : 10px;
`;
const RankingText = styled.Text`
font-size : 20px;
`;


const TrophyContainer = styled.View`
background-color: ${({ theme }) => theme.trophyColor};
border-width : 1px;
border-color : ${({ theme }) => theme.trophyColor};
border-radius : 50px;
width : 80px;
height : 80px;
justify-content: center;
align-items: center;
margin : 20px;
`;

const RankingContainer = styled.View`
flex-direction: row;
background-color: ${({ theme }) => theme.background};
border-width : 1px;
border-color : ${({ theme }) => theme.imgBtnBackground};
border-radius: 10px;
margin : 20px 0 20px 20px;
width : 95%;
justify-content: space-around;
align-items: center;
`;

const RowContainer = styled.View`
flex-direction: row;
align-items: center;
padding : 5px 20px 5px 0;
`;

const TierGraph = styled.Image`
width : 485px;
height : 100px;
border-Radius : 10px;
margin : 20px;
`;
const rankItem = [];
for (let i = 1; i < 100; i++) {
    rankItem.push({
        id: i,
        rank: `${i}위`,
        title: `학생  ${i}`,
    });
}



const ItemContainer = styled.TouchableOpacity`
flex-direction : row;
align-items : center;
border-bottom-width : 1px;
border-color : ${({ theme }) => theme.itemBorder};
padding : 15px 20px;
`;

const ItemTextContainer = styled.View`
flex : 1;
justify-content : space-around;
flex-direction : row;
`;

const ItemTitle = styled.Text`
font-size : 20px;
font-weight : 600;
`;

const ItemDesc = styled.Text`
font-size : 16px;
margin-top : 5px;
color : ${({ theme }) => theme.itemDesc};
`;

const Item = ({ item: { id, rank, title }, onPress }) => {
    console.log(id);

    return (
        <ItemContainer>
            <ItemTextContainer>
                <ItemDesc>{rank}</ItemDesc>
                <ItemTitle>{title}</ItemTitle>
            </ItemTextContainer>
        </ItemContainer>
    );
};

const SchoolName = ({ item: { schoolName }, onPress }) => {
    return (
        <ItemTextContainer>
            <ItemTitle>{schoolName}</ItemTitle>
        </ItemTextContainer>
    );
}
const SchoolRanking = () => {
    return (
        <Container>
            <RealContainer style={{ margin: 20 }}>
                <StyledText>학익고등학교 내 나의 랭킹</StyledText>
                <RankingContainer style={{ justifyContent: 'space-around' }}>
                    <TrophyContainer>
                        <AntDesign name="Trophy" size={50} color="orange" />
                    </TrophyContainer>
                    <TextContainer>
                        <RowContainer>
                            <RankingText>등수 </RankingText>
                            <RankingText style={{ fontWeight: 'bold' }}>22위</RankingText></RowContainer>
                    </TextContainer>
                    <StyledText>박상호</StyledText>
                </RankingContainer>
                <StyledText>티어 그래프</StyledText>
                <TierGraph source={{ uri: "https://image.fmkorea.com/files/attach/new/20190821/494354581/227573697/2110231057/15c75a61645bcd13e9609fef4affd386.png" }}
                />
                <StyledText>학교 내 나의 기여도</StyledText>
                <Table />
            </RealContainer>
            <RealContainer style={{ margin: 20 }}>
                <StyledText>학익고등학교 학생 랭킹</StyledText>
                <NormalContainer>
                    <RankingText style={{ marginTop: 20, marginLeft: 220, fontWeight: 'bold' }}>TOP 100</RankingText>
                    <FlatList
                        data={rankItem}
                        renderItem={({ item }) => <Item item={item} />}
                        keyExtractor={item => item['id'].toString()}
                    />
                </NormalContainer>

            </RealContainer>
        </Container >
    )
}

export default SchoolRanking;