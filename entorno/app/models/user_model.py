from pydantic import BaseModel

class User(BaseModel):
    idusuario: int = None
    nombre: str
    apellido: str
    correo: str
    celular: int
    direccion: str
    contraseña: str
    estado: int
    fechacreacion:str = None