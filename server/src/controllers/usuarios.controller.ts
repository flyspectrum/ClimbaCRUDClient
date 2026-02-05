import { Request, Response } from 'express';
import { connection } from '../database/connection';

export async function criarUsuario(req: Request, res: Response) {
  try {
    const {
      nome,
      email,
      dataNascimento,
      opcao,
      observacoes
    } = req.body;

    // validação básica (obrigatória em teste técnico)
    if (!nome || !email || !dataNascimento) {
      return res.status(400).json({
        erro: 'Nome, email e data de nascimento são obrigatórios'
      });
    }

    await connection.execute(
      `INSERT INTO usuarios 
       (nome, email, data_nascimento, opcao, observacoes)
       VALUES (?, ?, ?, ?, ?)`,
      [nome, email, dataNascimento, opcao, observacoes]
    );

    return res.status(201).json({
      mensagem: 'Usuário cadastrado com sucesso'
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      erro: 'Erro interno do servidor'
    });
  }
}
