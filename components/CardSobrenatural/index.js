import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'https://observatoriodocinema.uol.com.br/wp-content/uploads/2016/12/37-spn.jpg'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                A série conta a história dos irmãos Dean e Sam Winchester, órfãos de mãe, que a teriam perdido por conta de uma força maligna, e desde então o pai não se cansa de investigar este mistério. Dean se manteve sempre perto do pai e de sua rotina profissional, enquanto Sam deixou a casa para entrar na faculdade de Direito. 
                Isso até que seu irmão o procura pedindo ajuda, pois o pai teria desaparecido. Sam abandona seus projetos pessoais, inclusive a bela namorada, e o acompanha numa busca alucinante. Nesta perigosa jornada, além de tentarem superar as diferenças pessoais, terão pela frente um perigoso trabalho sobrenatural: encontrarão criaturas que a maioria das pessoas acreditavam existir apenas no folclore, superstição e pesadelos.
                </Text>
                <Text style={styles.texto}>
                Alunos: Leonardo Vitoriano Martins,
                        Beatriz Martins de Souza.
                </Text>
            </View>
        </View>
    );
}