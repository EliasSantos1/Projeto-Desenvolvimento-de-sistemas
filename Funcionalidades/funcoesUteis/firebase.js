import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCccAshc6okqYmtxvg9Iggz4FDMpGZeSgA",
  authDomain: "estoqueti-5645c.firebaseapp.com",
  databaseURL: "https://estoqueti-5645c-default-rtdb.firebaseio.com",
  projectId: "estoqueti-5645c",
  storageBucket: "estoqueti-5645c.appspot.com",
  messagingSenderId: "912081478892",
  appId: "1:912081478892:web:da4dafca68f83992af71c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
const dbRef = ref(db);


window.addEventListener("beforeunload", () => {
  goOffline();
});

window.addEventListener("beforereload", () => {
  goOffline();
});

// Função para ler dados do banco de dados e retorná-los como uma Promise
export function lerDados() {
  return new Promise((resolve, reject) => {
    try {
      // Ouça mudanças nos dados do banco de dados em tempo real
      onValue(dbRef, (snapshot) => {
        const dados = snapshot.val();
        resolve(dados); // Resolvemos a Promise com os dados
      });
    } catch (error) {
      reject(error); // Rejeitamos a Promise em caso de erro
    }
  });
}


// Função para adicionar dados ao banco de dados
export function adicionarDadosSolicitar(dadosParaAdicionar, ID_Dados) {
  try {
    // Referência para o local onde você deseja adicionar os dados
    const dadosRef = ref(db, `ItensParaSolicitar/${ID_Dados}`);

    // Adicione os dados ao banco de dados
    set(dadosRef, dadosParaAdicionar)
      .then(() => {
        console.log("Dados adicionados com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao adicionar dados:", error);
      });
  } catch (error) {
    console.error("Erro ao adicionar dados:", error);
  }
}

export function adicionarDadosRecebido(dadosParaAdicionar, ID_Dados) {
  try {
    // Referência para o local onde você deseja adicionar os dados
    const dadosRef = ref(db, `ItensRecebidos/${ID_Dados}`);

    // Adicione os dados ao banco de dados
    set(dadosRef, dadosParaAdicionar)
      .then(() => {
        console.log("Dados adicionados com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao adicionar dados:", error);
      });
  } catch (error) {
    console.error("Erro ao adicionar dados:", error);
  }
}

export function adicionarDadosAguardando(dadosParaAdicionar, ID_Dados) {
  try {
    // Referência para o local onde você deseja adicionar os dados
    const dadosRef = ref(db, `ItensAguardandoChegada/${ID_Dados}`);

    // Adicione os dados ao banco de dados
    set(dadosRef, dadosParaAdicionar)
      .then(() => {
        console.log("Dados adicionados com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao adicionar dados:", error);
      });
  } catch (error) {
    console.error("Erro ao adicionar dados:", error);
  }
}


// Função para excluir dados do banco de dados
export function excluirDadosSolicitar(ID_Dados) {
  try {
    // Referência para o local onde você deseja excluir os dados
    const dadosRef = ref(db, `ItensParaSolicitar/${ID_Dados}`);

    // Exclua os dados do banco de dados
    remove(dadosRef)
      .then(() => {
        console.log("Dados excluídos com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao excluir dados:", error);
      });
  } catch (error) {
    console.error("Erro ao excluir dados:", error);
  }
}

export function excluirDadosRecebido(ID_Dados) {
  try {
    // Referência para o local onde você deseja excluir os dados
    const dadosRef = ref(db, `ItensRecebidos/${ID_Dados}`);

    // Exclua os dados do banco de dados
    remove(dadosRef)
      .then(() => {
        console.log("Dados excluídos com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao excluir dados:", error);
      });
  } catch (error) {
    console.error("Erro ao excluir dados:", error);
  }
}

export function excluirDadosAguardando(ID_Dados) {
  try {
    // Referência para o local onde você deseja excluir os dados
    const dadosRef = ref(db, `ItensAguardandoChegada/${ID_Dados}`);

    // Exclua os dados do banco de dados
    remove(dadosRef)
      .then(() => {
        console.log("Dados excluídos com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao excluir dados:", error);
      });
  } catch (error) {
    console.error("Erro ao excluir dados:", error);
  }
}